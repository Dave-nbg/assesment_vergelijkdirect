import { mount } from '@vue/test-utils';
import BirthdayComponent from '@/components/BirthdayComponent.vue';

describe('AgeComponent.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(BirthdayComponent);
  });

  it('shows error message when the user is too young', async () => {
    const input = wrapper.find('input[type="date"]');

    await input.setValue('2015-01-01'); 

    expect(wrapper.vm.errorMessage).toBe('Date must be between 18 and 100 years old.');
    expect(wrapper.find('p.text-red-500').exists()).toBe(true);  
  });

  it('shows error message when the user is too old', async () => {
    const input = wrapper.find('input[type="date"]');

    await input.setValue('1920-01-01');  

    expect(wrapper.vm.errorMessage).toBe('Date must be between 18 and 100 years old.');
    expect(wrapper.find('p.text-red-500').exists()).toBe(true);  
  });

  it('does not show error message when the user is between 18 and 100 years old', async () => {
    const input = wrapper.find('input[type="date"]');

    await input.setValue('2000-01-01');  

    expect(wrapper.vm.errorMessage).toBeNull();
    expect(wrapper.find('p.text-red-500').exists()).toBe(false);  
  });

  it('calculates free years correctly when the user is exactly 18', async () => {
    const input = wrapper.find('input[type="date"]');

    await input.setValue('2006-01-01'); 
    expect(wrapper.vm.freeYearsOptions).toEqual([-5]);  
  });

  it('calculates free years correctly when the user is older than 18', async () => {
    const input = wrapper.find('input[type="date"]');

    await input.setValue('1990-01-01');  

    expect(wrapper.vm.freeYearsOptions.length).toBeGreaterThan(1); 
    expect(wrapper.vm.freeYearsOptions).toContain(-5);  
  });

  it('ensures the selected year is in the dropdown options', async () => {
    const input = wrapper.find('input[type="date"]');
    await input.setValue('2000-01-01');  

    expect(wrapper.vm.selectedYears).toBe(0);
  });
});
