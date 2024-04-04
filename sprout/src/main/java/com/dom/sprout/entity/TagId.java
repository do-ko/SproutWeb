package com.dom.sprout.entity;

import java.io.Serializable;
import java.util.Objects;

public class TagId implements Serializable {

    private int item;
    private int tag;

    public TagId() {
    }

    public TagId(int item, int tag) {
        this.item = item;
        this.tag = tag;
    }

    public int getItem() {
        return item;
    }

    public void setItem(int item) {
        this.item = item;
    }

    public int getTag() {
        return tag;
    }

    public void setTag(int tag) {
        this.tag = tag;
    }

    @Override
    public String toString() {
        return "TagId{" +
                "item=" + item +
                ", tag=" + tag +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TagId that = (TagId) o;
        return item == that.item && tag == that.tag;
    }

    @Override
    public int hashCode() {
        return Objects.hash(item, tag);
    }
}
