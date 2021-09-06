"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDomains = void 0;
async function allDomains(root, args, context) {
    try {
        const { pool } = context;
        const result = await pool.query(`SELECT name, domain_suffix, provisioning_cert, provisioning_cert_key from domains`, []);
        return result.rows;
    }
    catch (error) {
        console.log(error);
        throw new Error('Failed to get domains');
    }
}
exports.allDomains = allDomains;
//# sourceMappingURL=all.js.map