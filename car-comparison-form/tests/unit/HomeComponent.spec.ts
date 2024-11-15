import { mount, VueWrapper } from '@vue/test-utils';
import HomeComponent from '@/components/HomeComponent.vue';
import InfoMessage from '@/components/InfoMessage.vue';

import type { ComponentPublicInstance } from 'vue';

describe('HomeComponent.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(HomeComponent);
  });

  it('renders InfoMessage component with correct message', () => {
    const infoMessage = wrapper.findComponent(InfoMessage);
    expect(infoMessage.exists()).toBe(true);
    expect(infoMessage.props('message')).toBe(
      'Zipcode needs to be in this format: 4 digits followed by 2 uppercase letters (1234AB)'
    );
  });

  it('updates v-model for zipcode input', async () => {
    const zipcodeInput = wrapper.find('#zipcode-input');
    await zipcodeInput.setValue('1234AB');
    expect((wrapper.vm as any).zipcode).toBe('1234AB');

    await zipcodeInput.setValue('123ABC');
    expect((wrapper.vm as any).zipcode).toBe('123ABC');
    expect(zipcodeInput.element instanceof HTMLInputElement && zipcodeInput.element.validity.valid).toBe(false);
  });

  it('accepts alphanumeric characters for houseAddition input', async () => {
    const houseAdditionInput = wrapper.find('#house-addition');
    await houseAdditionInput.setValue('A1');
    expect((wrapper.vm as any).houseAddition).toBe('A1');

    await houseAdditionInput.setValue('XYZ');
    expect((wrapper.vm as any).houseAddition).toBe('XYZ');
  });

});
