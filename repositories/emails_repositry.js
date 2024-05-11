const {sendEmail}=require('../utils/sendEmail')
const {Email}=require('../models/index')
class EmailsRepository {
 
    async addEmail({ RecipientEmail,Subject,Body ,UserID}) {
        try {
            // Send email
            const isSendEmail= await sendEmail(RecipientEmail, Subject, Body);
            if(!isSendEmail){
                throw new Error('Error sending email');
            }

            const newEmail = await Email.create({
                RecipientEmail,
                Subject,
                Body,
                Status: 'Sent',
                SenderID: UserID
            });

            return newEmail;
        } catch (error) {
            console.error('Error adding email:', error.message);
            throw new Error('Error adding email');
        }
    }
}


const emailRepository = new EmailsRepository();
module.exports = emailRepository;