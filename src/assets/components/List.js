export default function List() {
    return `
        <ul class="app__list">
            <li class="list_item">
                <label class="form_control">
                    <input type="checkbox" name="checkbox" />
                    Wake up!
                </label>
            </li>
            <li class="list_item">
                <label class="form_control">
                    <input type="checkbox" name="checkbox" />
                    Wash
                </label>
            </li>
            <li class="list_item">
                <label class="form_control">
                    <input type="checkbox" name="checkbox" />
                    Coffee
                </label>
            </li>
            <li class="list_item">
                <label class="form_control">
                    <input type="checkbox" name="checkbox" />
                    Code
                </label>
            </li>
            <li class="list_item">
                <label class="form_control">
                    <input type="checkbox" name="checkbox" />
                    Sleep
                </label>
            </li>
        </ul>
    `;
}