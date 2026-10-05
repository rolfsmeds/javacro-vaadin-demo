package com.example.demo.ui;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Menu;
import com.vaadin.flow.router.Route;

@Route(value="", layout = MainLayout.class)
@StyleSheet("styles.css")
@Menu(title="Hello world")
public class HelloWorld extends VerticalLayout {
    public HelloWorld() {
        var title = new com.vaadin.flow.component.html.H1("Hello World");
        add(title);

        var nameField = new TextField("Name");
        add(nameField);

        var div = new Div();


        var btn = new Button("Click Me");
        add(btn);
        btn.addClickListener(e -> {
            div.setText("Hello, " + nameField.getValue());
        });

        add(div);
        div.addClassName("greeting");
        div.getStyle().setBorder("1px solid red");
    }
}
