import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { angularMicrositeGenerator } from './angular-microsite';
import { AngularMicrositeGeneratorSchema } from './schema';

describe('angular-microsite generator', () => {
  let tree: Tree;
  const options: AngularMicrositeGeneratorSchema = {
    name: 'test',
    scope: '',
    port: 0,
    route: '',
    description: '',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await angularMicrositeGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
