import { writeFileSync, writeFile } from 'fs';
import { join } from 'path';


// Принимает аргументы из командной строки
const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log('Укажите путь и имя компонента');
    process.exit(1);
}

// Преобразует имя компонента в CamelCase
const componentName = args[1] + '-component';
const componentPath = join(args[0], `${componentName}.tsx`);
function toCamelCase(str) {
    return str
        .replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }) // преобразует kebab-case в camelCase
        .replace(/^[a-z]/, function (g) { return g.toUpperCase(); }); // делает первую букву заглавной
}

let componentNameCamelCase = toCamelCase(componentName);

// Создаёт базовый шаблон для компонента React
const componentTemplate = `
import React from "react";

interface Props {
}

const ${componentNameCamelCase}: React.FC<Props> = () => {
  return (
    <div className="container">${componentName}</div>
  );
};

export default ${componentNameCamelCase};
`;

// Создает файл в указанном месте
writeFile(componentPath, componentTemplate, (err) => {
    if (err) {
        console.log('Ошибка при создании компонента:', err);
    } else {
        console.log('Компонент успешно создан:', componentPath);
    }
});
