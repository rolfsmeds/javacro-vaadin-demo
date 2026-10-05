package com.example.demo.ui;

import com.example.demo.data.Contact;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.sidenav.SideNav;
import com.vaadin.flow.component.sidenav.SideNavItem;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.router.Layout;
import com.vaadin.flow.server.menu.MenuConfiguration;

@Layout
public class MainLayout extends AppLayout {
    public MainLayout() {

        var nav = new SideNav();
        nav.setMinWidth("200px");
        addToDrawer(nav);
        MenuConfiguration.getMenuEntries().forEach(entry -> {
            var link = new SideNavItem(entry.title(), entry.menuClass());
            nav.addItem(link);
        });


    }
}
