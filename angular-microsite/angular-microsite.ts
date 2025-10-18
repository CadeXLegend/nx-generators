import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { AngularMicrositeGeneratorSchema } from './schema';
import { names } from '@nx/devkit';
import { execSync } from 'child_process';

function postGenerationSteps(projectRoot: string) {
  const postGenerationTasks = [
    `cd ${projectRoot}`,
    'pnpm install',
    'git init',
    'git add .',
    'git commit -am "feat: initial commit"',
    'git branch -m main',
  ];
  execSync(postGenerationTasks.join(' && '), { stdio: 'inherit' });
}

export async function angularMicrositeGenerator(
  tree: Tree,
  options: AngularMicrositeGeneratorSchema
) {
  const resolvedOptions = {
    ...options,
    name: names(options.name).fileName,
  };

  const projectRoot = `${resolvedOptions.name}`;
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    projectRoot,
    resolvedOptions
  );
  await formatFiles(tree);

  return () => postGenerationSteps(projectRoot);
}

export default angularMicrositeGenerator;
