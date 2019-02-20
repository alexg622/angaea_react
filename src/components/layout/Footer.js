import React from 'react'

export default () => {
  return (
    <div class="new-footer-container">
      <div class="new-footer-left-container">
        <img class="angaea-footer-image" width="25px" height="25px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/the_angaea_final_symbol.png?raw=true"/>
        <%= link_to "Angaea", root_path, class: "logo-footer" %>
      </div>
      <div id="new-footer-right-container">
        <%= link_to "Services", root_path, class: "footer-color"%>
        <% if current_user %>
          <%= link_to "Dashboard", dashboard_path, class: "footer-color"%>
        <% end %>
        <%= link_to "About", "/about", class: "footer-color"%>
        <%= link_to "Contact", "/contact", class: "footer-color"%>
        <% if logged_in? %>
          <%= link_to "Portfolio", user_path(current_user), class: "footer-color"%>
        <%end%>
      </div>
    </div>

  );
};
