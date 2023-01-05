import { nextTick } from 'vue'
import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Accordion from "@barebones/components/Accordion/Accordion.vue";

import AccordionLocal from "@barebones-local/Accordion/Accordion.parts";
const { parts } = AccordionLocal();


allComponentPartClassesToDisplayCorrectly(Accordion, parts);

describe("Accordion", () => {
  let wrapper;
  let button;
  let content;
  beforeEach(async () => {
    wrapper = mount(Accordion, {
      props: {},
      slots: {
        title: 'Accordion title',
        content: 'Accordion content'
      }
    });

    button = wrapper.find('button');
    content = wrapper.find('[data-part="content"]');
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has the correct button names", () => {
    expect(button.text()).toBe('Accordion title');
  });

  it("has the correct content", () => {
    expect(content.text()).toBe('Accordion content');
  });

  // Write more tests
});
