let getAuditLog = (message) => {
    message.guild.fetchAuditLogs()
        .then(audit => {
            console.log([...audit.entries].slice(0, 6));
        })
        .catch(console.error);
}

module.exports = getAuditLog;