describe('403 Hatasina Karşi çözüm ', () => {
    it('403 hatasina çözüm', () => {
        cy.visit(('https://www.airbnb.de/'),{
            headers:{
                "User-Agent": "axios/0.27.1"
            }
            
        })
    });
});