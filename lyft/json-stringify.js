function jsonStringify(value) {
    // Handle null
    if (value === null) {
        return 'null';
    }

    // Handle primitives: number, boolean
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }

    // Handle strings (escape special characters)
    if (typeof value === 'string') {
        return '"' + value.replace(/\\/g, '\\\\')
                          .replace(/"/g, '\\"')
                          .replace(/\n/g, '\\n')
                          .replace(/\r/g, '\\r')
                          .replace(/\t/g, '\\t') + '"';
    }

    // Handle arrays
    if (Array.isArray(value)) {
        let result = value.map(item => (item === undefined || typeof item === 'function') ? 'null' : jsonStringify(item));
        return '[' + result.join(',') + ']';
    }

    // Handle objects (including plain objects)
    if (typeof value === 'object') {
        let result = [];
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                const keyValue = value[key];
                if (keyValue !== undefined && typeof keyValue !== 'function') {
                    result.push(jsonStringify(key) + ':' + jsonStringify(keyValue));
                }
            }
        }
        return '{' + result.join(',') + '}';
    }

    // Return 'null' for anything not serializable
    return 'null';
}
