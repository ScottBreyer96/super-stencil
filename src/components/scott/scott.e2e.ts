import { newE2EPage } from '@stencil/core/testing';

describe('composant-scott', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<composant-scott></composant-scott>');

    const element = await page.find('composant-scott');
    expect(element).toHaveClass('hydrated');
  });
});
