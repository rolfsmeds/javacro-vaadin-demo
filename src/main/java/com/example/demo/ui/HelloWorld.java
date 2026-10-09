package com.example.demo.ui;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Menu;
import com.vaadin.flow.router.Route;

@Route(value="", layout=MainLayout.class)
@StyleSheet("styles.css")
@Menu(title="Hello World")
public class HelloWorld extends VerticalLayout {
    public HelloWorld() {

        var nameField = new TextField("Your name");

        var greeting = new Paragraph();
        greeting.addClassName("greeting");
        greeting.getStyle().setColor("blue").setFontWeight("bold");

        var greetButton = new Button("Greet me");
        greetButton.addClickListener(event -> {
            greeting.setText("Hello, " + nameField.getValue());
        });

        add(nameField, greetButton, greeting);

    }
}
