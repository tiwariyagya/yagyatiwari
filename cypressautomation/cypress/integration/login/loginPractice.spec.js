

describe('validate the login credential',function(){


it('login with valid credential',function(){
    cy.visit('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fb%2F%3Fie%3DUTF8%26node%3D19862923011%26ref_%3Dnav_signin%26pf_rd_p%3D3e165e1d-4903-42db-9b1a-505d40e6b827%26pf_rd_s%3Dnav-sitewide-msg%26pf_rd_t%3D4201%26pf_rd_i%3Dnavbar-4201%26pf_rd_m%3DATVPDKIKX0DER%26pf_rd_r%3DCKK11MW82HYH20G04ZZ8&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&')
    cy.get('input[type="email"]').type('tiwari.yagya1@gmail.com')
    cy.get('input[id="continue"]').click()
    cy.get('input[type="password"]').type('******')
    cy.get('input[id="signInSubmit"]').click()
    cy.get('span[id="nav-link-accountList-nav-line-1"]').should('be.visible')
    cy.get('input[type="text"]').type('remote control')
    cy.get('input[type="submit"]').click()
    

})

it('login with invalid credential',function(){
    cy.visit('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fb%2F%3Fie%3DUTF8%26node%3D19862923011%26ref_%3Dnav_signin%26pf_rd_p%3D3e165e1d-4903-42db-9b1a-505d40e6b827%26pf_rd_s%3Dnav-sitewide-msg%26pf_rd_t%3D4201%26pf_rd_i%3Dnavbar-4201%26pf_rd_m%3DATVPDKIKX0DER%26pf_rd_r%3DCKK11MW82HYH20G04ZZ8&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&')
    cy.get('input[type="email"]').type('tiwari.yagya1@gmail.com')
    cy.get('input[id="continue"]').click()
    cy.get('input[type="password"]').type('yagya123')
    cy.get('input[id="signInSubmit"]').click()
    cy.get('h4[class="a-alert-heading"]').should('be.visible')

 })

 })

// describe('validate the login credential',function(){

//     it('login with valid credential',function(){

//         cy.visit('https://www.facebook.com/')
//         cy.get('input[type="email"]').type('tiwari.yagya1@yahoo.com')
//         cy.get('input[type="password"]').type('yagya')
//         cy.get('[data-testid=royal_login_button]').click()

//     })
// })