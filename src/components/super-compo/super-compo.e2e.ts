import { newE2EPage } from '@stencil/core/testing';

describe('super-compo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<super-compo></super-compo>');

    const element = await page.find('super-compo');
    expect(element).toHaveClass('hydrated');
  });
});
