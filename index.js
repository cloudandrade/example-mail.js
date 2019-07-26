const app = require('express')();
const bodyParser = require('body-parser')

const mailer = require('nodemailer')

app.use(bodyParser.json());


const config = {
host: 'smtp.mailtrap.io',
port: '2525',
auth: {
    user: 'b7db99e7a8329f',
    pass: '946d90e3fbea90',
}
};

const transporter = mailer.createTransport(config);



app.post('/sendmail', (req,res) =>{

    const message = {
        from: "cloudandrade@gmail.com",
        to: "jan.andrade@capcap.com",
        subject: "titulo do email",
        text: "este é um email gerado",
    }


    transporter.sendMail(message, (error, info) => {
        if(error){
            console.log(error);
            return res.status(400).send('a tentativa de mandar email falhou')
        }
        return res.status(200).send('a tentativa de enviar o email foi bem sucedida');
    })

    
})











app.get('/', (req,res) => {
    res.send('app funcionando');
})

app.listen(3000, (req,res) => {
    console.log('aplicação rodando na porta 3000!')
});