import {Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
import Data from "../../TestData/data"; 

const locator= new locatorsPage();
const data= new Data(); 
const eagle = "cypress/fixtures/eagle.png"

// <------------------------------------------------------------------->
// <----------------------- signin Steps ------------------------------->
// <------------------------------------------------------------------->
Given('open rokomari website', ()=> { 
    cy.visit(data.URL)
    cy.wait(5000)
})
When('Click on signin navibar',() => { 
    cy.xpath(locator.signinbar).click({force:true})
    cy.wait(5000)
})
And('write Your email',() => {
    cy.xpath(locator.email).click({force:true}).type(data.Email)
})
And('Write Your Password',() => {
    cy.xpath(locator.password).click({force:true}).type(data.PASSWORD)
})
And('click on signin button',() => { 
    cy.xpath(locator.signin).click({force:true})
    cy.wait(4000)
})
Then('User should be able to see book page',() => {
    cy.xpath(locator.book).should('be.exist')
    cy.xpath(locator.book).should('be.visible')
})
/*=============================
    signin with invalid password 
===============================*/
And('Write Your invalid password',()=> {
    cy.xpath(locator.password).type(data.InvalidPassword)
})
/*=============================
    Change my Account information
===============================*/
When('user click on profile icon',() => {
    cy.xpath(locator.profileicon).click({force:true})
})
And('click on my Account' , () => {
    cy.xpath(locator.myaccount).click()
})
And('click on change profile picture',() => {
    cy.xpath(locator.changeprofilepicture).click({force:true})
})
And('click on choose file button',() => {
    cy.xpath(locator.choosefile).selectFile(eagle)
    cy.wait(2000)
})
And('click on save button',() => {
    cy.xpath(locator.save).click({force:true})
})
/*=============================
   view  all Fictionbooks
===============================*/
When('click on view all button',() => {
    cy.wait(5000)
    cy.xpath(locator.viewall).click({force:true})
})
And('Scroll down & User should see the fictionbooks',() => {
    cy.scrollTo('bottom')
})
/*=============================
   search any item
===============================*/
When('click on search text box and write a name Alor jholok', ()  => {
    cy.xpath(locator.search).click({force:true}).type('Alor Jholok{enter}')
    cy.wait(4000)
})
Then('User should see the finding book',() => {
    cy.xpath(locator.alorjholok).should('be.exist')
    cy.xpath(locator.alorjholok).should('be.visible')
})
/*=============================
   check that a mouse information
===============================*/
When('user click on mouse',() => {
    cy.xpath(locator.mouse).click({force:true})
    cy.wait(4000)
})
And('Click on a mouse &  User should see the mouse information',() => {
    cy.xpath(locator.wired_mouse).click({force:true})
})
/*=============================
   Sign out 
===============================*/

And('Click on sign out button',() => {
    cy.xpath(locator.signout).click({force:true})
})
