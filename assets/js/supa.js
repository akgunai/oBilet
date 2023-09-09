// const mainUrl= "https://jechdmwurjqoeknzsjbd.supabase.co/rest/v1/"

// const url = fetch(
//     mainUrl,{
//         headers: {
//             'Content-Type': 'application/json',
//             'Authotization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplY2hkbXd1cmpxb2VrbnpzamJkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDE5NTk2MiwiZXhwIjoyMDA5NzcxOTYyfQ.mrxijeJZ2zvEDmq6DBp354QqSA0rS2m6hC-JzzRUKB8',
//             'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplY2hkbXd1cmpxb2VrbnpzamJkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDE5NTk2MiwiZXhwIjoyMDA5NzcxOTYyfQ.mrxijeJZ2zvEDmq6DBp354QqSA0rS2m6hC-JzzRUKB8',
//         }
//     }

// )
// .then(r =>r.json());
// console.log(url)
const mainUrl = "https://jechdmwurjqoeknzsjbd.supabase.co/rest/v1/"
const showCities = document.querySelector('.downArrow')


async function showCities(){
    const cities = await fetch(
        mainUrl,{
            headers:{
                'Content-Type': 'application/json',
                'Authotization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplY2hkbXd1cmpxb2VrbnpzamJkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDE5NTk2MiwiZXhwIjoyMDA5NzcxOTYyfQ.mrxijeJZ2zvEDmq6DBp354QqSA0rS2m6hC-JzzRUKB8',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplY2hkbXd1cmpxb2VrbnpzamJkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDE5NTk2MiwiZXhwIjoyMDA5NzcxOTYyfQ.mrxijeJZ2zvEDmq6DBp354QqSA0rS2m6hC-JzzRUKB8',

            }
        }
    )
}