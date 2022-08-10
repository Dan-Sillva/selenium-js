// exportando a build do selenium e o modulo do firefox
const {Builder} = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')

// criando o serviço do firefox(passando o path do webdrive) e criando o drive em cima
const service = new firefox.ServiceBuilder('/home/dan/Estudos/seleniumjs/webDrivers/geckodriver')
const driver = new Builder().forBrowser('firefox').setFirefoxOptions(service).build()

// função para abrir o firefox no google e fechar(bem simples) 
async function openFirefox(){
    try {
        
        await driver.get('https://www.google.com')
        await driver.quit()

    } catch (error) {
        console.log(error)
    }
}

// Rodando :D
console.log('rodando ....')
openFirefox()