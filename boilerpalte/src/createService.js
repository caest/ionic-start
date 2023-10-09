import { writeFileSync, writeFile } from 'fs';
import { join } from 'path';


// Принимает аргументы из командной строки
const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log('Укажите путь и имя сервиса');
    process.exit(1);
}

// Преобразует имя компонента в CamelCase
const componentName = args[1] + '-service';
const componentPath = join(args[0], `${componentName}.ts`);
function toCamelCase(str) {
    return str
        .replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }) // преобразует kebab-case в camelCase
        .replace(/^[a-z]/, function (g) { return g.toUpperCase(); }); // делает первую букву заглавной
}

let componentNameCamelCase = toCamelCase(componentName);

// Создаёт базовый шаблон для компонента React
const componentTemplate = `import { BehaviorSubject } from "rxjs";
import { isEqual } from "lodash";
import { Dispatch, SetStateAction } from "react";
import { Service } from "../../utils/types";

export type Props = {};

export const defaultState: Props = {};

class ${componentNameCamelCase} implements Service<Props> {
  private static instance: ${componentNameCamelCase};
  loaded: boolean = false;
  public state$ = new BehaviorSubject<Props>(defaultState);
  defaultState: Props = defaultState;
  state: Props = defaultState;
  setState: Dispatch<SetStateAction<Props>> = (
    state: SetStateAction<Props>
  ) => {
    const prevState = this.state$.value;
    const newState = typeof state === "function" ? state(prevState) : state;
    if (!isEqual(prevState, newState)) {
      this.state$.next(newState);
    }
  };
  public getState(): Props {
    return this.state$.value;
  }
  private constructor() {
    this.state$.subscribe((state) => {
      this.state = state;
    });
  }
  public makeAsLoaded(): void {
    this.loaded = true;
  }
  public fillState(props: any) {
    this.setState(props);
    this.makeAsLoaded();
  }
  public static getInstance(): ${componentNameCamelCase} {
    if (!${componentNameCamelCase}.instance) {
        ${componentNameCamelCase}.instance = new ${componentNameCamelCase}();
    }

    return ${componentNameCamelCase}.instance;
  }
}

export default ${componentNameCamelCase}.getInstance();
`;

// Создает файл в указанном месте
writeFile(componentPath, componentTemplate, (err) => {
    if (err) {
        console.log('Ошибка при создании сервиса:', err);
    } else {
        console.log('Сервис успешно создан:', componentPath);
    }
});
