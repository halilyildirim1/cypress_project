describe('Choreme Extension', function() {

   it('what_it_does', function() {
  
      cy.visit('https://www.google.com/imghp?hl=tr&tab=ri&ogbl')
   
      cy.viewport(1536, 754)
   
      cy.visit('https://www.google.com/imghp?hl=tr&tab=ri&ogbl')
   
      cy.viewport(1536, 754)
   
      cy.visit('https://www.google.com/imghp?hl=tr&tab=ri&ogbl')
   
      cy.get('.gb_6c > #gbwa > .gb_g > .gb_d > .gb_h').click()
   
      cy.get('body > .L3eUgb > .o3j99 > .LX3sZb > #gb').click()
   
      cy.get('.RNNXgb > .Tg7LZd > .zgAlFc > .z1asCe > svg').click()
   
      cy.get('.A8SBwf > .RNNXgb > .SDkEP > .a4bIc > #APjFqb').click()
   
      cy.get('.RNNXgb > .Tg7LZd > .zgAlFc > .z1asCe > svg').click()
   
      cy.visit('https://www.google.com/search?q=a&hl=tr&tbm=isch&source=hp&biw=1536&bih=754&ei=pFGsZNy7F6eGxc8Pt_eMYA&iflsig=AD69kcEAAAAAZKxftI-9vRoQQyQMi2bdMp781ipfrNZh&ved=0ahUKEwjcnYqG5oSAAxUnQ_EDHbc7AwwQ4dUDCAc&oq=a&gs_lcp=CgNpbWcQDDIICAAQgAQQsQMyCwgAEIAEELEDEIMBMgUIABCABDIICAAQgAQQsQMyCAgAELEDEIMBMggIABCxAxCDATIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgARQmgdYmgdg1xRoAXAAeACAAVOIAVOSAQExmAEAoAEBqgELZ3dzLXdpei1pbWewAQA&sclient=img')
   
      cy.get('.tAcEof > .O850f > .iSZmU > .T47uwc > .NZmxZe:nth-child(5)').click()
   
      cy.visit('https://www.google.com/search?q=a&source=lmns&tbm=nws&bih=754&biw=1536&hl=tr&sa=X&ved=2ahUKEwix6_KO5oSAAxXq7LsIHc70D0sQ_AUoA3oECAEQAw')
   
      cy.get('#hdtb-msb > div > .MUFPAc > .hdtb-mitem:nth-child(5) > a').click()
   
      cy.visit('https://www.google.com/maps?q=a&bih=754&biw=1536&hl=tr&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjFgrKR5oSAAxXEX_EDHZk_AB8Q_AUoBHoECAEQBg')
   
      cy.visit('https://www.google.com/search?q=a&source=lmns&tbm=nws&bih=754&biw=1536&hl=tr&sa=X&ved=2ahUKEwix6_KO5oSAAxXq7LsIHc70D0sQ_AUoA3oECAEQAw')
   
   })
  
  })
  describe('Chrome Extension 2', () => {
   it('Extensions test', () => {
      cy.visit('https://www.google.com/webhp?hl=tr&sa=X&ved=0ahUKEwjFgrKR5oSAAxXEX_EDHZk_AB8QPAgI');
      cy.get('.LLD4me').click();
        cy.url().should('contains', 'https://ogs.google.com/u/0/widget/account');
         cy.get('.gb_k').click();

   });
  });
  