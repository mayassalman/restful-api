import imaps from "imap-simple";

const config = {
    imap: {
        user: 'crypyo.master011@gmail.com',
        password: 'crypto011master011',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3300
    }
};
export async function  getAllUnreadEmailsSubjects(){
    
    const connection=await imaps.connect(config);
    // return config
if (!connection) {
    
    const inbox= await  connection.openBox('INBOX');
    
    if (inbox){
        const searchCriteria = [
            'UNSEEN'
        ];
        
        const fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            markSeen: false
        };
        
       const results=await connection.search(searchCriteria, fetchOptions);
        if  (results) {
            const subjects = results.map( (res)=> {
                return res.parts.filter( (part) =>{
                    return part.which === 'HEADER';
                })[0].body.subject[0];
            });
            
            console.log(subjects);
            return subjects
            // =>
            //   [ 'Hey Chad, long time no see!',
            //     'Your amazon.com monthly statement',
            //     'Hacker Newsletter Issue #445' ]
        };
    };
    
};
}
