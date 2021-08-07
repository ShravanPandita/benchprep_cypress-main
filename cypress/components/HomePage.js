const home = '[#navigation ul li:nth-child(1) a span]'


class HomePageComponents{

    _homeLeftNav(){
        return cy.get(home)
    }

}

export default HomePageComponents