// exportando a build do selenium e o modulo do firefox
const {Builder, By} = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')
const { DriverService } = require('selenium-webdriver/remote')

// criando o serviço do firefox(passando o path do webdrive) e criando o drive em cima
const service = new firefox.ServiceBuilder('/home/dan/Estudos/seleniumjs/webDrivers/geckodriver')
const driver = new Builder().forBrowser('firefox').setFirefoxOptions(service).build()

// função para abrir o firefox no google e fechar(bem simples) 
async function openFirefox(){
    try {
        
        await driver.get('https://www.google.com')

        let searchBar = await driver.findElement(By.name('q'))
        let btnGo = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]'))
        
        await searchBar.sendKeys('nodejs')
        await btnGo.click()

        await driver.quit()

    } catch (error) {
        console.log(error)
    }
}

// Rodando :D
console.log('rodando ....')
openFirefox()