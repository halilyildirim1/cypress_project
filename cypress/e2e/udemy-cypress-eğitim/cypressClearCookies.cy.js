describe('Cypress Local Storage ',() => {
    it('Dosya yukleme-1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.getCookies()
        cy.clearCookies()// gidilen sitedeki çerezleri
        cy.getCookies()
        //cy.get('div:nth-child(3) > div.pane-header > h3').click()
        //cy.get('.logo-preview').attachFile({filePath:"photo.jpg"},{subjectType:'drag-n-drop'})
    });

    it.skip('Dosya yukleme-2', () => {
        const fileName = 'icardi.jpg'
        cy.fixture('icardi.jpg')
        .then(Cypress.Blob.base64StringToBlob)//convert islemi icin
        .then((fileContent) => {
            cy.get('.logo-preview').attachFile( //gidilen siteye foto yüklüyo
                {fileContent, fileName, mimeType: 'image/**'},{subjectType:'drag-n-drop'}
            )
        })
    });
});