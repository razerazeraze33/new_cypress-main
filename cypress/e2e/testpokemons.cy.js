describe('e2e покупка аватара', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/');    // переходим на сайт https://pokemonbattle.ru/  
         cy.get('#k_email').type('tyrik25012011@mail.ru');      // ввести свой логин     
         cy.get('#k_password').type('K@qwerty2501ar'); // ввести свой пароль
         cy.get('.MuiButton-root').click(); // нажать кнопку войти
         cy.get('.k_main_photo').should('be.visible'); // ожидание прогрузки страницы,ожидаем прогрузки картинки тренера чтобы перейти в карточку тренера
         cy.get('.header_card_trainer').click(); // нажать на карточку тренера
         cy.get('.single_page_body_avatar_img').should('be.visible'); // ожидание прогрузки страницы, ожидаем прогрузки аватара тренера
         cy.get('.k_mobile > :nth-child(5)').click(); // нажать на "смена аватара"
         cy.get(':nth-child(12) > .shop__img').should('be.visible'); // ожидание прогрузки страницы, ожидаем прогрузки картинки последнего аватара
         cy.get(':nth-child(1) > .shop__button').click(); // нажать купить на аватаре, перебрасывает на сайт "пикачунькофф"
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // вводим карту
         cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // вводим дату 
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // вводим CVV
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME'); // Вводим имя держателя 
         cy.get('button:contains("Оплатить"):not(.disable)').should('be.visible');
         cy.get('button:contains("Оплатить"):not(.disable)').click(); // нажимаем оплатить, откраывается сайт с подтверждением смс
         cy.contains('Подтверждение покупки').should('be.visible') // Проверка что перешли на сайт подтверждения оплаты
         cy.get('.style_1_base_input').type('56456'); //вводим код из смс
         cy.get('button:contains("Оплатить"):not(.disable)').click(); // нажимаем подтвердить
         cy.contains('Покупка прошла успешно').should('be.visible'); //Проверка что оплата прошла и текст виден пользователю
        cy.get('.style_1_base_link_blue').click(); //вернуться в меню магазина
})
})
