import { nextTick } from 'vue'
import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { allComponentPartClassesToDisplayCorrectly } from "@barebones/components/__tests__/helpers";
import Tabs from "@barebones/components/Tabs/Tabs.vue";

import TabsLocal from "@barebones-local/Tabs/Tabs.parts";
const { parts } = TabsLocal();


allComponentPartClassesToDisplayCorrectly(Tabs, parts);

describe("Tabs", () => {
  let wrapper;
  let buttons;
  let contents;
  beforeEach(async () => {
    wrapper = mount(Tabs, {
      props: {
        tabs: [
          {
            key: 'foo',
            title: 'Foo',
          },
          {
            key: 'bar',
            title: 'Bar',
          },
        ]
      },
      slots: {
        foo: 'Hello Foo',
        bar: 'Hello Bar'
      }
    });

    buttons = wrapper.findAll('button');
    contents = wrapper.findAll('[data-part="contentItem"]');
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has the correct button names", () => {
    expect(buttons[0].text()).toBe('Foo');
    expect(buttons[1].text()).toBe('Bar');
  });

  it("has the correct content", () => {
    expect(contents[0].text()).toBe('Hello Foo');
    expect(contents[1].text()).toBe('Hello Bar');
  });

  it("the correct content is active on load", () => {
    // expect(buttons[0].classes()).toContain(parts.navigationButtonActive.theme.default);
    expect(contents[0].attributes('aria-hidden')).toBe('false');
    expect(contents[0].attributes('style')).not.toContain('display: none');
    // expect(buttons[1].classes()).not.toContain(parts.navigationButtonActive.theme.default);
    expect(contents[1].attributes('aria-hidden')).toBe('true');
    expect(contents[1].attributes('style')).toContain('display: none');
  });

  it("the correct content is active on button click", async () => {
    buttons[1].trigger('click');
    await nextTick();
    expect(contents[0].attributes('aria-hidden')).toBe('true');
    expect(contents[0].attributes('style')).toContain('display: none');
    expect(contents[1].attributes('aria-hidden')).toBe('false');
    expect(contents[1].attributes('style')).not.toContain('display: none');
  });

});
