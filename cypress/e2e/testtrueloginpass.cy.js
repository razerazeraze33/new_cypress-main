describe('Проверка авторизации', function () {

   beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

    afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });

   it('Верный пароль и верный логин', function () {
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка, что после автор. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    })

    it('Верный логин и неверный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio2'); // Ввел неверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что после автор. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    })

    it('Неверный логин и верный пароль', function () {
        cy.get('#mail').type('german1@dolnikov.ru'); // Ввел неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что после автор. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю

    })

    it('Тест восстановления пароля', function () {
        cy.get('#forgotEmailButton').click(); // Нажал на кнопку восставновления пароля
        cy.get('#mailForgot').type('qa@studio.ru'); // Ввел логин для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажал на кнопку "отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка, что после восстановления вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверка что текст виден пользователю 
      })

    it('Негативный кейс валидации без @', function () {
        cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка, что выходит ошибка валидации
        cy.get('#messageHeader').should('be.visible'); // проверка что текст виден пользователю 
      })

    it('Кейс на приведение к строчным буквам', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка, что после автор. вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    })
})