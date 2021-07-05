import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';
import { OhrmButtonComponent } from './ohrm-button.component';

//👇 Imports a specific story for the test
import { Primary } from '../../stories/Ohrm-button.stories';

test('renders the button in the primary state ', async () => {
  await render(OhrmButtonComponent, {
    componentProperties: Primary.args,
  });
  expect(screen.getByRole('button').classList.contains('storybook-button--primary')).toBeTruthy();
});
