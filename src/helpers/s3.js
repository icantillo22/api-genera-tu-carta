import AWS from 'aws-sdk'
import config from './config'


AWS.config.update({ 
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    signatureVersion: "v4",
});

const s3 = new AWS.S3()

const uploadFile = async ({path, fileName, fileContent}) => {
    const params = {
        Bucket: config.AWS_BUCKET_NAME,
        Key: `${config.AWS_BASE_PATH}/${path}/${fileName}`,
        Body: fileContent
    }

    const res = await s3.upload(params).promise()
    return res
}

const getUrlFile = ({key, expires}) => {
    const res = s3.getSignedUrl('getObject', {
        Bucket: config.AWS_BUCKET_NAME,
        Key: key,
        Expires: expires || 900,
    })

    return res
}

const createFile = async ({pathFileInS3, fileName, fileContent, expires = 900}) => {
    const dataToUpload = {
        fileContent: fileContent,
        fileName: fileName,
        path: pathFileInS3,
    }

    const { key } = await uploadFile(dataToUpload);
    const urlFileInS3 = getUrlFile({key, expires});

    return urlFileInS3
}

export {
    createFile
}