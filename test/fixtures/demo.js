export default function generateErrorTemplate(err) {
  const strToHtml = (str) =>
    (str || '')
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>')
      .replace(/"/g, '')
      .replace(/'/g, "'")
      .replace(/\[(\d+)m/g, '')
      .replace(/ /g, ' ')
      .replace(/\n/g, '<br />');
  const template = `
          <!DOCTYPE html> 
          <html>
          <head>
          </head>
          <body>
            <div>
              ${strToHtml(err.toString()) || ''}
            </div>
          </body>
          </html>`;
  return template;
}
