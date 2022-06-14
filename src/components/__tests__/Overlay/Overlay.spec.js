import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import Overlay from "@barebones/components/Overlay/Overlay.vue";


const defaultSlot = "Hello world";

describe("Overlay", () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = mount(Overlay, {
      slots: {
        default: defaultSlot
      }
    });
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the correct slot", () => {
    expect(wrapper.find('[data-part="overlayInner"]').html()).contains(defaultSlot)
  });

});
