export default async function handler(req, res){
    const fs = require('fs');
    const {body: {date, remark, event, troubleshoot}} = req

    try{
        const decoded_data = JSON.parse(fs.readFileSync('data/tasksdata.json', 'utf8'))
        const updated_data = [{date, remark, event, troubleshoot}, ...decoded_data]

        if(new Date(date) === 'Invalid Date' || isNaN(new Date())) res.status(200).json({
            type: 'error',
            message: 'Date seem to be invalid.'
        })
        else if(event === '') res.status(200).json({
            type: 'error',
            message: 'Event cannot be empty.'
        })
        else if(remark === '') res.status(200).json({
            type: 'error',
            message: 'Remark cannot be empty.'
        })
        else await fs.writeFile('data/tasksdata.json', JSON.stringify(updated_data), (err) => {
            if(err) res.status(200).json({
                type: 'error',
                message: err
            })
            else res.status(200).json({
                type: 'success',
                message: 'Info saved successfully.',
                data: {date, remark, event, troubleshoot}
            })
        })
    }
    catch(e){
        res.status(200).json({
            type: 'error',
            message: 'Couldn\'t parse file.'
        })
    }
}
