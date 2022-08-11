import * as s3 from '../../helpers/s3'
import generateContentPDF from '../../helpers/generateContentPDF'
import generateFileName from '../../helpers/generateFileName'
import replaceHTMLData from './replaceHTMLData'

const generateResignationLetter = async (req, res) => {
    try {        
        const data = {
            ...req.body,
            dataPerson: JSON.parse(req.body.dataPerson),
            firm: '',
        };

        const { dataPerson } = data;

        const urlFirmInS3 = req?.files?.firm ? await s3.createFile({
            pathFileInS3: `job-letters/firms`,
            fileName: generateFileName({name: dataPerson.name, extension: '.png'}),
            fileContent: req.files.firm.data
        }) : false;

        data.firm = urlFirmInS3;

        const fileName = generateFileName({
            prefix: 'carta-de-renuncia',
            name: `${data?.generationDate}-${dataPerson?.name}-${dataPerson?.position}`,
            extension: '.pdf'
        });
        const html = replaceHTMLData(data, fileName);
        
		const streamPDF = await generateContentPDF({ html });

		const urlPDFInS3 = await s3.createFile({
			pathFileInS3: `job-letters/resignation`,
			fileName,
			fileContent: streamPDF
		});

		res.status(200).json({
            error: false,
            url: urlPDFInS3,
        });
	} catch (error) {
        res.status(500).json({
            error: true,
            errorMessage: error,
        })
		throw Error('Error upload file to S3', error)
	}
}

export {
    generateResignationLetter
}