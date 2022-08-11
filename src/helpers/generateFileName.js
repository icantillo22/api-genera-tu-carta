const generateFileName = ({ prefix = '', name, extension }) => {
    return `${prefix}-${name}-${extension}`.toLowerCase().replaceAll(' ', '-');
}

export default generateFileName