export class JobReference {    //Commessa
    JobRecordId: string = '';
    Code: string = ''; //Codice commessa
    Name: string = '';
}
export class JobTaskReference {     // Attività
    JobTaskRecordId: string = '';
    JobRecordId: string = '';
    Number: string = '';    //Cod. attività
    Name: string = '';
}

export class PersonReference {    
    PersonRecordId: string = '';
    Code: string = '';
    Name: string = '';
    Surname: string = '';
    Type: number = 0;
}


//forse unpo di errore qua
export class WeekWorkJournal {
    WeekWorkJournalRecordId: string = '';
    JobRecordId: string = '';
    JobTaskRecordId: string = '';
    PersonRecordId: string = '';
    MondayDate: Date = new Date('1753-01-01'); //Lunedì
    MondayUnits: number = 0;
    MondayUnitOfMesure: string = 'G'; // giorni
    MondayNote: string = '';
    TuesdayDate: Date = new Date('1753-01-01'); //Martedì
    TuesdayUnits: number = 0;
    TuesdayUnitOfMesure: string = 'G'; // giorni
    TuesdayNote: string = '';
    WednesdayDate: Date = new Date('1753-01-01'); //Mercoledì
    WednesdayUnits: number = 0;
    WednesdayUnitOfMesure: string = 'G'; // giorni
    WednesdayNote: string = '';
    ThursdayDate: Date = new Date('1753-01-01'); //Giovedì
    ThursdayUnits: number = 0;
    ThursdayUnitOfMesure: string = 'G'; // giorni
    ThursdayNote: string = '';
    FridayDate: Date = new Date('1753-01-01'); //Venerdì
    FridayUnits: number = 0;
    FridayUnitOfMesure: string = 'G'; // giorni
    FridayNote: string = '';
    SaturdayDate: Date = new Date('1753-01-01'); //Sabato
    SaturdayUnits: number = 0;
    SaturdayUnitOfMesure: string = 'G'; // giorni
    SaturdayNote: string = '';
    SundayDate: Date = new Date('1753-01-01'); //Domenica
    SundayUnits: number = 0;
    SundayUnitOfMesure: string = 'G'; // giorni
    SundayNote: string = '';
}

export class WorkWeek {
    HeaderFilter: PersonReference[] = [];
    WeekFirstDay: Date = new Date('1753-01-01'); //Lunedì
    WeekLastDay: Date = new Date('1753-01-01'); // Domenica
    Work: WeekWorkJournal[] = [];
}



const ResList: PersonReference[] = [
    {   
        PersonRecordId: 'AAA-AAA',
        Code: 'LSO',
        Name: 'Lorenzo',
        Surname: 'Soncini',
        Type: 1
    },
    {
        PersonRecordId: 'AAA-BBB',
        Code: 'MXU',
        Name: 'Marco',
        Surname: 'Xu',
        Type: 6
    }
]; 

const JobList: JobReference[]  = [
    {
        JobRecordId: 'AAA-AAA',
        Code: 'ACCA2024',
        Name: 'Busness Central Accademy 2024'
    },
    {
        JobRecordId: 'AAA-BBB',
        Code: 'INTRA2024',
        Name: 'Intranet ZZ Soft 2024'
    }
]

const JobTaskList: JobTaskReference[]  = [
    {
        JobTaskRecordId: '31925e5d-3e2a-494e-b947-7bef08086e9b',
        JobRecordId: 'AAA-AAA',
        Number: '10000',
        Name: 'Docenza'
    },
    {
        JobTaskRecordId: '5d4d45ad-fef3-4a43-8c95-8ff032d2f2b1',
        JobRecordId: 'AAA-BBB',
        Number: '1000',
        Name: 'Rendicontazione lavoro'
    },
    {
        JobTaskRecordId: 'a835a000-99b0-4aca-947e-79e90a8bd8af',
        JobRecordId: 'AAA-BBB',
        Number: '2000',
        Name: 'Note spese'
    },
    {
        JobTaskRecordId: '3381ae54-9827-4b4e-abff-00eadfe130e4',
        JobRecordId: 'AAA-BBB',
        Number: '3000',
        Name: 'Anagrafica progetti/commesse'
    },
    {
        JobTaskRecordId: 'd59b633c-9b7b-4c39-a761-e475ff4b3f32',
        JobRecordId: 'AAA-BBB',
        Number: '3000',
        Name: 'Anagrafica persone/risorse'
    },
    {
        JobTaskRecordId: '6d6a2a9a-78d3-497c-ac02-e3aca8c5c249',
        JobRecordId: 'AAA-BBB',
        Number: '4000',
        Name: 'Presenze del personale'
    }
];

// Un pò di logiche/complicazioni
// Scelto il codice commessa il codice attivià deve appartenere a quella commessa se no => ERRORE!                //relazione padre figlio in sql
// Posso inserire solo numeri con due decimali e solo con questi deicmali: N N.25 N.50 N.75 (N+1) Esempio: 1.25 OK, 1.22 Errore, 1.50 OK 1.33 ERRORE sono validi solo .25,.50,.75 come decimali
//