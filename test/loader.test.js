import { webpack } from './helpers';

describe('loader', () => {
  it('should works', async () => {
    const stats = await webpack('basic.js');
    const { modules } = stats.toJson();
    const [, demo] = modules;
    expect(demo.source).toMatchSnapshot('separator');
    expect(stats.compilation.errors).toMatchSnapshot('errors');
  });
});
