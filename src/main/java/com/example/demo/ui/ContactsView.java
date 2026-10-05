package com.example.demo.ui;

import com.example.demo.data.Contact;
import com.example.demo.data.ContactRepository;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.Menu;
import com.vaadin.flow.router.Route;

@Route(value="contacts",  layout = MainLayout.class)
@Menu(title="Contacts")
public class ContactsView extends VerticalLayout {

    private final ContactRepository contactRepository;
    private final Grid<Contact> grid = new Grid<>(Contact.class);

    public ContactsView(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
        setSizeFull();

        var form = new ContactForm();

        add(grid);
        grid.setWidthFull();
        setFlexGrow(1, grid);
        grid.setColumns("name", "email", "phone", "birthday");
        grid.setItems(contactRepository.findAll());
        grid.asSingleSelect().addValueChangeListener(e -> {
            form.setContact(e.getValue());
        });


        add(form);

    }

    public class ContactForm extends FormLayout {

        TextField name = new TextField("Name");
        EmailField email = new EmailField("Email");
        TextField phone = new TextField("Phone");
        DatePicker birthday = new DatePicker("Birthday");

        Binder<Contact> binder = new BeanValidationBinder<>(Contact.class);

        public ContactForm() {

            add(name, email, phone, birthday);
            binder.bindInstanceFields(this);

            var saveButton = new Button("Save");
            saveButton.addThemeVariants(ButtonVariant.PRIMARY);
            add(saveButton);
            saveButton.addClickListener(e -> {
               if (binder.isValid()) {
                   contactRepository.save(binder.getBean());
                   grid.setItems(contactRepository.findAll());
               }
            });
        }

        public void setContact(Contact contact) {
            binder.setBean(contact);
        }
    }
}
