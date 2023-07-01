export default function contentComponent(){
    const container = document.createElement('div');
container.id = 'container';

const content = document.createElement('div');
content.id = 'content';

container.appendChild(content);

document.body.appendChild(container);

}