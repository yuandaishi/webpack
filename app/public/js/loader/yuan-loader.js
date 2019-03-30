import getOptions from 'loader-utils';
import validateOptions from 'schema-utils';
export default function loader(source) {
    const options = getOptions(this);
    validateOptions(schema, options, 'Example Loader');
    console.log(this);
    source = source.replace(/\[name\]/g, options.name);
  
    return `export default ${ JSON.stringify(source) }`;
}