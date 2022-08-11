import regignationTemplate from '../../templates/resignationLetter.template'


const replaceHTMLData = (data) => {
    let html = regignationTemplate;

    const pendingTasks = data?.pendingTasks ? 
        `si bien quedan algunos pendientes correspondientes a mis tareas, cumpliré con mis compromisos hasta el día de la dimisión` :
        `he cumplido con mis compromisos y seguiré cumpliéndolos hasta el día de mi dimisión`;

    const gratitude = data?.gratitude && data?.thanksTo ? 
        `, en especial a <b>${data.thanksTo}</b> por ayudarme a realizar las labores ` :
        ` para el desarrollo `;

    html = html.replace('{{titlePDF}}', data?.title);
    html = html.replace('{{city}}', data?.city);
    html = html.replace('{{generationDate}}', data?.generationDate);
    html = html.replaceAll('{{name}}', data?.dataPerson?.name);
    html = html.replaceAll('{{position}}', data?.dataPerson?.position);
    html = html.replace('{{startDate}}', data?.startDate);
    html = html.replace('{{endDate}}', data?.endDate);
    html = html.replace('{{reason}}', data?.reason);
    html = html.replace('{{pendingTasks}}', pendingTasks);
    html = html.replace('{{gratitude}}', gratitude);
    html = html.replace('{{email}}', data?.dataPerson.email);
    html = html.replace('{{cellPhone}}', data?.dataPerson?.cellPhone);
    html = html.replaceAll('{{showFirm}}', data?.firm ? 'block' : 'none');
    html = html.replace('{{firm}}', data?.firm);

    return html
}

export default replaceHTMLData;