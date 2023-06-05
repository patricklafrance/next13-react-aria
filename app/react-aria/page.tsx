"use client"

import { Cell, Heading, Input, Item, Label, Link, Radio, Table, TableBody } from 'react-aria-components';
import { MyColumn, MyRow, MyTableHeader } from './MyTable';
import { MyComboBox, MyComboBoxItem } from './MyComboBox';
import { MyDialog, MyDialogTrigger } from './MyDialog';
import { MyGridItem, MyGridList } from './MyGridList';
import { MyListBox, MyListboxItem } from './MyListbox';
import { MyMenuButton, MyMenuItem } from './MyMenu';
import { MySelect, MySelectItem } from './MySelect';
import { MyTab, MyTabPanel, MyTabPanels, MyTabs, MyTabsList } from './MyTabs';
import { MyTooltip, MyTooltipTrigger } from './MyTooltip';
import { Provider, defaultTheme } from '@adobe/react-spectrum';

import { MyBreadcrumbs } from './MyBreadcrumbs';
import { MyButton } from "./MyButton";
import { MyCalendar } from './MyCalendar';
import { MyCheckbox } from "./MyCheckbox";
import { MyCheckboxGroup } from './MyCheckboxGroup';
import { MyDateField } from "./MyDateField";
import { MyDatePicker } from "./MyDatePicker";
import { MyModal } from './MyModal';
import { MyPopover } from './MyPopover';
import { MyRadioGroup } from './MyRadioGroup';
import { MySearchField } from './MySearchField';
import { MySwitch } from './MySwitch';
import { MyTextField } from './MyTextField';
import { MyToggleButton } from './MyToggleButton';
import { SSRProvider } from 'react-aria';

export default function SpectrumPage() {
    return (
        <SSRProvider>
            <Provider theme={defaultTheme}>
                <h1>React Aria</h1>
                <div>
                    <h2>Button</h2>
                    <MyButton onPress={() => alert('Hello world!')}>Press me</MyButton>
                </div>
                <div>
                    <h2>Toggle button</h2>
                    <MyToggleButton>Pin</MyToggleButton>
                </div>
                <div>
                    <h2>GridList</h2>
                    <MyGridList aria-label="Ice cream flavors" selectionMode="multiple">
                        <MyGridItem>Chocolate</MyGridItem>
                        <MyGridItem>Mint</MyGridItem>
                        <MyGridItem>Strawberry</MyGridItem>
                        <MyGridItem>Vanilla</MyGridItem>
                    </MyGridList>
                </div>
                <div>
                    <h2>ListBox</h2>
                    <MyListBox aria-label="Ice cream flavor" selectionMode="single">
                        <MyListboxItem>Chocolate</MyListboxItem>
                        <MyListboxItem>Mint</MyListboxItem>
                        <MyListboxItem>Strawberry</MyListboxItem>
                        <MyListboxItem>Vanilla</MyListboxItem>
                    </MyListBox>
                </div>
                <div>
                    <h2>Menu</h2>
                    <MyMenuButton label="Edit">
                        <MyMenuItem>Cut</MyMenuItem>
                        <MyMenuItem>Copy</MyMenuItem>
                        <MyMenuItem>Paste</MyMenuItem>
                    </MyMenuButton>
                </div>
                <div>
                    <h2>Table</h2>
                    <Table aria-label="Files" selectionMode="multiple">
                        <MyTableHeader>
                            <MyColumn isRowHeader>Name</MyColumn>
                            <MyColumn>Type</MyColumn>
                            <MyColumn>Date Modified</MyColumn>
                        </MyTableHeader>
                        <TableBody>
                            <MyRow>
                                <Cell>Games</Cell>
                                <Cell>File folder</Cell>
                                <Cell>6/7/2020</Cell>
                            </MyRow>
                            <MyRow>
                                <Cell>Program Files</Cell>
                                <Cell>File folder</Cell>
                                <Cell>4/7/2021</Cell>
                            </MyRow>
                            <MyRow>
                                <Cell>bootmgr</Cell>
                                <Cell>System file</Cell>
                                <Cell>11/20/2010</Cell>
                            </MyRow>
                        </TableBody>
                    </Table>
                </div>
                <div>
                    <h2>Calendar</h2>
                    <MyCalendar aria-label="Event date" />
                </div>
                <div>
                    <h2>DateField</h2>
                    <MyDateField label="Event date" />
                </div>
                <div>
                    <h2>DatePicker</h2>
                    <MyDatePicker label="Event date" />
                </div>
                <div>
                    <h2>Checkbox</h2>
                    <MyCheckbox />
                </div>
                <div>
                    <h2>CheckboxGroup</h2>
                    <MyCheckboxGroup label="Favorite sports">
                        <MyCheckbox value="soccer">Soccer</MyCheckbox>
                        <MyCheckbox value="baseball">Baseball</MyCheckbox>
                        <MyCheckbox value="basketball">Basketball</MyCheckbox>
                    </MyCheckboxGroup>
                </div>
                <div>
                    <h2>RadioGroup</h2>
                    <MyRadioGroup label="Favorite sport">
                        <Radio value="soccer">Soccer</Radio>
                        <Radio value="baseball">Baseball</Radio>
                        <Radio value="basketball">Basketball</Radio>
                    </MyRadioGroup>
                </div>
                <div>
                    <h2>SearchField</h2>
                    <MySearchField label="Search" />
                </div>
                <div>
                    <h2>Switch</h2>
                    <MySwitch>Wi-Fi</MySwitch>
                </div>
                <div>
                    <h2>Textfield</h2>
                    <MyTextField label="Name" />
                </div>
                <div>
                    <h2>Breadcrumbs</h2>
                    <MyBreadcrumbs>
                        <Item><Link><a href="/">Home</a></Link></Item>
                        <Item><Link><a href="/react-aria">React Aria</a></Link></Item>
                        <Item><Link>useBreadcrumbs</Link></Item>
                    </MyBreadcrumbs>
                </div>
                <div>
                    <h2>Tabs</h2>
                    <MyTabs>
                        <MyTabsList aria-label="History of Ancient Rome">
                            <MyTab id="FoR">Founding of Rome</MyTab>
                            <MyTab id="MaR">Monarchy and Republic</MyTab>
                            <MyTab id="Emp">Empire</MyTab>
                        </MyTabsList>
                        <MyTabPanels>
                            <MyTabPanel id="FoR">
                                Arma virumque cano, Troiae qui primus ab oris.
                            </MyTabPanel>
                            <MyTabPanel id="MaR">
                                Senatus Populusque Romanus.
                            </MyTabPanel>
                            <MyTabPanel id="Emp">
                                Alea jacta est.
                            </MyTabPanel>
                        </MyTabPanels>
                    </MyTabs>
                </div>
                <div>
                    <h2>Dialog</h2>
                    <MyDialogTrigger>
                        <MyButton>Sign up…</MyButton>
                        <MyModal>
                            <MyDialog>
                                {({ close }: { close: any }) => (
                                    <form>
                                    <Heading>Sign up</Heading>
                                    <MyTextField autoFocus>
                                        <Label>First Name</Label>
                                        <Input />
                                    </MyTextField>
                                    <MyTextField>
                                        <Label>Last Name</Label>
                                        <Input />
                                    </MyTextField>
                                    <MyButton onPress={close}>
                                        Submit
                                    </MyButton>
                                    </form>
                                )}
                            </MyDialog>
                        </MyModal>
                    </MyDialogTrigger>
                </div>
                <div>
                    <h2>Modal</h2>
                    <MyDialogTrigger>
                        <MyButton>Sign up…</MyButton>
                        <MyModal>
                            <MyDialog>
                            {({ close }) => (
                                <form>
                                <Heading>Sign up</Heading>
                                <MyTextField autoFocus>
                                    <Label>First Name:</Label>
                                    <Input />
                                </MyTextField>
                                <MyTextField>
                                    <Label>Last Name:</Label>
                                    <Input />
                                </MyTextField>
                                <MyButton onPress={close}>
                                    Submit
                                </MyButton>
                                </form>
                            )}
                            </MyDialog>
                        </MyModal>
                    </MyDialogTrigger>
                </div>
                <div>
                    <h2>Popover</h2>
                    <MyDialogTrigger>
                        <MyButton>Open popover</MyButton>
                        <MyPopover>This is an example popover.</MyPopover>
                    </MyDialogTrigger>
                </div>
                <div>
                    <h2>Tooltip</h2>
                    <MyTooltipTrigger>
                        <MyButton>💾</MyButton>
                        <MyTooltip>Save</MyTooltip>
                    </MyTooltipTrigger>
                </div>
                {/* <div>
                    <h2>ComboBox</h2>
                    <MyComboBox label="Ice cream flavor">
                        <MyComboBoxItem>Chocolate</MyComboBoxItem>
                        <MyComboBoxItem>Mint</MyComboBoxItem>
                        <MyComboBoxItem>Strawberry</MyComboBoxItem>
                        <MyComboBoxItem>Vanilla</MyComboBoxItem>
                    </MyComboBox>
                </div> */}
                {/* <div>
                    <h2>Select</h2>
                    <MySelect label="Ice cream flavor">
                        <MySelectItem>Chocolate</MySelectItem>
                        <MySelectItem>Mint</MySelectItem>
                        <MySelectItem>Strawberry</MySelectItem>
                        <MySelectItem>Vanilla</MySelectItem>
                    </MySelect>
                </div> */}
            </Provider>
        </SSRProvider>
    )
}