const express = require('express');
const mysql = require('mysql');
const app = express();

const PORT = 3000;
app.disable('x-powered-by');

var conn = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

conn.connect(function (err) {
    if (err) throw err;
});

app.get('/', (req, res) => {
    const sql = 'SELECT id, name FROM people';
    conn.query(sql, (err, peoples) => {
        if (err) throw err;

        const html = `
        <h1>Full Cycle</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            ${peoples.map(item => `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                </tr>`).join('')}
        </table>
        `;
        res.send(html);

    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});