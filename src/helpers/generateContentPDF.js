import Bluebird from 'bluebird'
import htmlPDF from 'html-pdf'

const generateContentPDF = async ({ html }) => {
    const optionsPDF = {		
		format: 'Letter',
		border: {
			"top": "1in",            
			"right": "1in",
			"bottom": "1in",
			"left": "1in"
		},
    }

    const convertHTML = htmlPDF.create(html, optionsPDF);
    const pdfToStream = Bluebird.promisify(convertHTML.__proto__.toStream, { context: convertHTML });
    const streamResult = await pdfToStream();

    return streamResult;
}

export default generateContentPDF