package com.example.demo.ui;

import com.example.demo.data.Contact;
import com.example.demo.data.ContactRepository;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.Menu;
import com.vaadin.flow.router.Route;

@Route(value="contacts", layout=MainLayout.class)
@Menu(title="Contacts")
public class ContactsView extends VerticalLayout {

    private final ContactRepository contactRepository;
    private final Grid<Contact> grid = new Grid<>(Contact.class);
    private final ContactForm form = new ContactForm();

    public ContactsView(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
        setDefaultHorizontalComponentAlignment(Alignment.STRETCH);

        var title = new com.vaadin.flow.component.html.H1("Contacts");
        add(title);

        grid.setItems(contactRepository.findAll());
        addAndExpand(grid);
        grid.setColumns("name", "email", "phone", "birthday");
        grid.asSingleSelect().addValueChangeListener(e -> {
           form.setContact(e.getValue());
        });

        add(form);
    }

    public class ContactForm extends FormLayout {

        Binder<Contact> binder = new BeanValidationBinder<Contact>(Contact.class);
        TextField name = new TextField("Name");
        EmailField email = new EmailField("Email");
        TextField phone = new TextField("Phone");
        DatePicker birthday = new DatePicker("Birthday");

        public ContactForm() {

            add(name, email, phone, birthday);

            var saveButton = new Button("Save");
            saveButton.addClickListener(e -> {
               if (binder.isValid()) {
                   contactRepository.save(binder.getBean());
                   grid.setItems(contactRepository.findAll());
               } else {
                   Notification.show("Form not valid");
               }
            });
            add(saveButton);
            saveButton.addThemeVariants(ButtonVariant.PRIMARY);

            binder.bindInstanceFields(this);
        }

        public void setContact(Contact contact) {
            binder.setBean(contact);
        }
    }
}
