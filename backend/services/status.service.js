exports.checkStatus = () => {
    return {
        success: true,
        message: 'API is running successfully',
        timestamp: new Date().toISOString()
    };
};
