import React from 'react'
import { Button, Input, Checkbox, Select, Radio } from 'antd'

const { Option } = Select
const { OptGroup } = Select

const tailManufactures = 'Alienware,Eizo,Lenovo,MSI'.split(',')

const hotManufactures = 'Acer,AOC,ASUS,BenQ,DELL,HP,Iiyama,LG,NEC,Phillips,Samsung,Viewsonic'.split(
  ',',
)

const manufactures = [...hotManufactures, ...tailManufactures].sort()

const radioStyle = { display: 'block', height: '30px', lineHeight: '30px' }

const groupedManufactures = manufactures.reduce((accumulator, item) => {
  const litera = item[0]
  const list = accumulator[litera] || []
  list.push(item)
  accumulator[litera] = list
  return accumulator
}, {})

const deliveries = {
  with: 'С доставкой',
  without: 'Самовывоз',
  any: 'Любой'
}

class SearchLayout extends React.Component {
  render() {
    return (
      <div className="search-layout">
        <div>
          <div className="_18Ke-OpxeG" data-d49f65c5="true" data-reactroot data-reactid={1}>
            <div className="uSBwpmLzLQ" data-e8e9edc5="true" data-reactid={2}>
              <div className="_1dg-mVVfwq" data-reactid={3}>
                <div
                  data-zone-name="minimap"
                  data-zone-data="{pageId:market:list,region:157,outletsCount:4}"
                  data-reactid={4}
                >
                  <div data-f80b03eb="true" data-reactid={5}>
                    <div className="_2Uen9ecS3a" data-9c5c5c8b="true" data-reactid={6}>
                      <span className="_3xtMbW8XL4" data-reactid={7}>
                        Магазины на карте
                      </span>
                    </div>
                    <div data-9d6dc3aa="true" data-reactid={8}>
                      <a
                        href="https://market.yandex.by/geo?nid=54539&suggestText=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&hid=91052"
                        className="_2qvOOvezty _19m_jhLgZR"
                        data-712821aa="true"
                        data-reactid={9}
                      >
                        <div className="_1wa1BfeBkk" data-reactid={10}>
                          <img
                            alt=""
                            src="./old/saved_resource"
                            className="PvnQESFJHu"
                            data-reactid={11}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_1dg-mVVfwq" data-reactid={12}>
                <div className="SMIUZQVy8Y" data-e66a5985="true" data-reactid={13}>
                  <div className="_2Uen9ecS3a" data-9c5c5c8b="true" data-reactid={14}>
                    <span className="_3xtMbW8XL4" data-reactid={15}>
                      Категории
                    </span>
                  </div>
                  <ul className="_2BLXswkhGO" data-e66a5985="true" data-reactid={16}>
                    <li className="_2HihpwObsk" data-e66a5985="true" data-reactid={17}>
                      <a
                        className="_38YjhiFMWW"
                        href="https://market.yandex.by/catalog/54425/list?onstock=0&deliveryincluded=0&local-offers-first=0&text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&cvredirect=3&track=srch_ddl"
                        data-2f9fe585="true"
                        data-reactid={18}
                      >
                        <span data-70f80245="true" data-reactid={19}>
                          Компьютерная техника
                        </span>
                      </a>
                      <ul className="_2BLXswkhGO" data-e66a5985="true" data-reactid={20}>
                        <li className="_2HihpwObsk" data-e66a5985="true" data-reactid={21}>
                          <a
                            className="_38YjhiFMWW"
                            href="https://market.yandex.by/catalog/58486/list?onstock=0&deliveryincluded=0&local-offers-first=0&text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&cvredirect=3&track=srch_ddl"
                            data-2f9fe585="true"
                            data-reactid={22}
                          >
                            <span data-70f80245="true" data-reactid={23}>
                              Периферийные устройства компьютера
                            </span>
                          </a>
                          <ul className="_2BLXswkhGO" data-e66a5985="true" data-reactid={24}>
                            <li
                              className="_2HihpwObsk _3-af5SeCJi"
                              data-e66a5985="true"
                              data-reactid={25}
                            >
                              <a
                                href="/"
                                className="_38YjhiFMWW _3OOgSGfeZO"
                                data-2f9fe585="true"
                                data-reactid={26}
                              >
                                <span data-70f80245="true" data-reactid={27}>
                                  Мониторы
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span className="_2BLXswkhGO _3-af5SeCJi" data-e66a5985="true" data-reactid={28}>
                    <a
                      className="link link_theme_normal"
                      href="https://market.yandex.by/search?text=%D0%9C%D0%BE%D0%BD%D0%B8%D1%82%D0%BE%D1%80%D1%8B&cvredirect=0&track=redirbartree"
                      tabIndex={0}
                      data-reactid={29}
                    >
                      Все результаты поиска
                    </a>
                  </span>
                </div>
              </div>
              <div className="_1dg-mVVfwq" data-reactid={31}>
                <div className="_1vMoBTNhsM" data-6d8f6c05="true" data-reactid={32}>
                  <div className="_2Uen9ecS3a" data-9c5c5c8b="true" data-reactid={33} />
                  <div className="_178jz2CyDL" data-reactid={34}>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={35}>
                      <fieldset className="_38PayafmjD" data-4b88e4e5="true" data-reactid={36}>
                        <legend className="babsHy47c5" data-reactid={37}>
                          Цена, б.p.
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={38}>
                          <ul className="lih4lXS8EN" data-reactid={39}>
                            <li className="_3E2Wzu8o3H" data-reactid={40}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="from"
                                data-214865aa="true"
                                data-reactid={41}
                              >
                                <Input addonBefore="от" />
                              </p>
                            </li>
                            <li className="_3E2Wzu8o3H" data-reactid={45}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="to"
                                data-214865aa="true"
                                data-reactid={46}
                              >
                                <Input addonBefore="до" />
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="_2vOXvqbQ4f" data-bccec8a7="true" data-reactid={50}>
                          <Checkbox>Цена с учётом доставки</Checkbox>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={55} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={57}>
                      <Checkbox>
                        <b>В продаже</b>
                      </Checkbox>
                      {/* <fieldset
                        data-autotest-id="onstock"
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={58}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={59}>
                          В продаже
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={60}>
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor="onstock"
                            data-9d4e0d85="true"
                            data-reactid={61}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0412 \u043F\u0440\u043E\u0434\u0430\u0436\u0435"
                              id="onstock"
                              data-reactid={62}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={63}>
                              <span className="NVoaOvqe58 _1gAodJU0Dw" data-reactid={64}>
                                В продаже
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset> */}
                      <div className="_3vgfOcGSnv" data-reactid={65} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={67}>
                      <fieldset
                        data-autotest-id={7893318}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={68}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={69}>
                          Производитель
                        </legend>
                        <Select
                          mode="multiple"
                          style={{ width: '100%' }}
                          placeholder="Please select"
                        >
                          {Object.entries(groupedManufactures).map(([litera, list]) => (
                            <OptGroup key={litera} label={litera}>
                              {list.map((item) => (
                                <Option key={item} value={item}>{item}</Option>
                              ))}
                            </OptGroup>
                          ))}
                        </Select>
                        <ul className="_2y67xS5HuR" data-da31bdc5="true" data-reactid={70}>
                          {manufactures.map((item) => (
                            <li
                              key={item}
                              className="_1-l0XiE_ze"
                              data-da31bdc5="true"
                              data-reactid={71}
                            >
                              <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={72}>
                                <Checkbox>{item}</Checkbox>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <footer className="_2XviVqx9xN" data-da31bdc5="true" data-reactid={155}>
                          <a href="/" className="_2Wg9rE1HzR" data-reactid={156}>
                            Показать всё
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={157} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={437}>
                      <fieldset className="_2qWuY12N6f" data-779c2885="true" data-reactid={438}>
                        <legend className="_1nAu9jHf6S" data-reactid={439}>
                          Способ доставки
                        </legend>
                        {Object.entries(deliveries).map(([value, title]) => (
                          <Radio key={value} value={value} style={radioStyle}>
                            {title}
                          </Radio>
                        ))}
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={459} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={159}>
                      <fieldset
                        data-autotest-id="filter-promo-or-discount"
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={160}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={161}>
                          Скидки и акции
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={162}>
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor="filter-promo-or-discount"
                            data-9d4e0d85="true"
                            data-reactid={163}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0421\u043A\u0438\u0434\u043A\u0438 \u0438 \u0430\u043A\u0446\u0438\u0438"
                              id="filter-promo-or-discount"
                              data-reactid={164}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={165}>
                              <span className="NVoaOvqe58 _1gAodJU0Dw" data-reactid={166}>
                                Скидки и акции
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={167} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={169}>
                      <fieldset
                        data-autotest-id={15153047}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={170}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={171}>
                          Размер экрана
                        </legend>
                        <ul className="_2y67xS5HuR" data-da31bdc5="true" data-reactid={172}>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={173}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={174}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153069"
                                data-9d4e0d85="true"
                                data-reactid={175}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 19.1-22"
                                  id="15153047_15153069"
                                  data-reactid={176}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={177}>
                                  <span className="NVoaOvqe58" data-reactid={178}>
                                    19.1"-22"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={179}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={180}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153071"
                                data-9d4e0d85="true"
                                data-reactid={181}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 23.1-24"
                                  id="15153047_15153071"
                                  data-reactid={182}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={183}>
                                  <span className="NVoaOvqe58" data-reactid={184}>
                                    23.1"-24"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={185}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={186}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153078"
                                data-9d4e0d85="true"
                                data-reactid={187}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 24.1-27"
                                  id="15153047_15153078"
                                  data-reactid={188}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={189}>
                                  <span className="NVoaOvqe58" data-reactid={190}>
                                    24.1"-27"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={191}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={192}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153070"
                                data-9d4e0d85="true"
                                data-reactid={193}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 17.1-19"
                                  id="15153047_15153070"
                                  data-reactid={194}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={195}>
                                  <span className="NVoaOvqe58" data-reactid={196}>
                                    17.1"-19"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={197}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={198}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="15153047_15153077"
                                data-9d4e0d85="true"
                                data-reactid={199}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0420\u0430\u0437\u043C\u0435\u0440 \u044D\u043A\u0440\u0430\u043D\u0430 15.1-17"
                                  id="15153047_15153077"
                                  data-reactid={200}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={201}>
                                  <span className="NVoaOvqe58" data-reactid={202}>
                                    15.1"-17"
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer className="_2XviVqx9xN" data-da31bdc5="true" data-reactid={203}>
                          <a href="/" className="_2Wg9rE1HzR" data-reactid={204}>
                            Показать ещё 5
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={205} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={207}>
                      <fieldset
                        data-autotest-id={4913586}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={208}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={209}>
                          Макс. разрешение
                        </legend>
                        <ul className="_2y67xS5HuR" data-da31bdc5="true" data-reactid={210}>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={211}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={212}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103913"
                                data-9d4e0d85="true"
                                data-reactid={213}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 1920x1080"
                                  id="4913586_12103913"
                                  data-reactid={214}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={215}>
                                  <span className="NVoaOvqe58" data-reactid={216}>
                                    1920x1080
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={217}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={218}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103903"
                                data-9d4e0d85="true"
                                data-reactid={219}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 1280x1024"
                                  id="4913586_12103903"
                                  data-reactid={220}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={221}>
                                  <span className="NVoaOvqe58" data-reactid={222}>
                                    1280x1024
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={223}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={224}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103918"
                                data-9d4e0d85="true"
                                data-reactid={225}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 2560x1440"
                                  id="4913586_12103918"
                                  data-reactid={226}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={227}>
                                  <span className="NVoaOvqe58" data-reactid={228}>
                                    2560x1440
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={229}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={230}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103912"
                                data-9d4e0d85="true"
                                data-reactid={231}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 1680x1050"
                                  id="4913586_12103912"
                                  data-reactid={232}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={233}>
                                  <span className="NVoaOvqe58" data-reactid={234}>
                                    1680x1050
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={235}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={236}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913586_12103921"
                                data-9d4e0d85="true"
                                data-reactid={237}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u043A\u0441. \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 3840x2160"
                                  id="4913586_12103921"
                                  data-reactid={238}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={239}>
                                  <span className="NVoaOvqe58" data-reactid={240}>
                                    3840x2160
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer className="_2XviVqx9xN" data-da31bdc5="true" data-reactid={241}>
                          <a href="/" className="_2Wg9rE1HzR" data-reactid={242}>
                            Показать всё
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={243} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={245}>
                      <fieldset
                        data-autotest-id={4913588}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={246}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={247}>
                          Тип матрицы экрана
                        </legend>
                        <ul className="_2y67xS5HuR" data-da31bdc5="true" data-reactid={248}>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={249}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={250}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103947"
                                data-9d4e0d85="true"
                                data-reactid={251}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT TN"
                                  id="4913588_12103947"
                                  data-reactid={252}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={253}>
                                  <span className="NVoaOvqe58" data-reactid={254}>
                                    TFT TN
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={255}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={256}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103938"
                                data-9d4e0d85="true"
                                data-reactid={257}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT IPS"
                                  id="4913588_12103938"
                                  data-reactid={258}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={259}>
                                  <span className="NVoaOvqe58" data-reactid={260}>
                                    TFT IPS
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={261}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={262}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103929"
                                data-9d4e0d85="true"
                                data-reactid={263}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT *VA"
                                  id="4913588_12103929"
                                  data-reactid={264}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={265}>
                                  <span className="NVoaOvqe58" data-reactid={266}>
                                    TFT *VA
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={267}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={268}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103932"
                                data-9d4e0d85="true"
                                data-reactid={269}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT AH-IPS"
                                  id="4913588_12103932"
                                  data-reactid={270}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={271}>
                                  <span className="NVoaOvqe58" data-reactid={272}>
                                    TFT AH-IPS
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={273}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={274}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103939"
                                data-9d4e0d85="true"
                                data-reactid={275}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT MVA"
                                  id="4913588_12103939"
                                  data-reactid={276}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={277}>
                                  <span className="NVoaOvqe58" data-reactid={278}>
                                    TFT MVA
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={279}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={280}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103942"
                                data-9d4e0d85="true"
                                data-reactid={281}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT PLS"
                                  id="4913588_12103942"
                                  data-reactid={282}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={283}>
                                  <span className="NVoaOvqe58" data-reactid={284}>
                                    TFT PLS
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={285}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={286}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913588_12103930"
                                data-9d4e0d85="true"
                                data-reactid={287}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0422\u0438\u043F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u044D\u043A\u0440\u0430\u043D\u0430 TFT A-MVA"
                                  id="4913588_12103930"
                                  data-reactid={288}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={289}>
                                  <span className="NVoaOvqe58" data-reactid={290}>
                                    TFT A-MVA
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer className="_2XviVqx9xN" data-da31bdc5="true" data-reactid={291}>
                          <a href="/" className="_2Wg9rE1HzR" data-reactid={292}>
                            Показать всё
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={293} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={295}>
                      <fieldset
                        data-autotest-id={4913622}
                        className="_2ESDYRtKSQ"
                        data-7473e865="true"
                        data-reactid={296}
                      >
                        <legend className="_6Ev7l7PxvV" data-reactid={297}>
                          Макс. частота обновления кадров, Гц
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={298}>
                          <ul className="_1DYevRkiWL" data-reactid={299}>
                            <li className="_1W_iTekL7P" data-reactid={300}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="from"
                                data-214865aa="true"
                                data-reactid={301}
                              >
                                <input
                                  type="text"
                                  className="_2yK7W3SWQ- _1d02bPcWht"
                                  id="4913622from"
                                  name="\u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043E\u0442"
                                  placeholder={15}
                                  defaultValue
                                  data-reactid={302}
                                />
                                <label
                                  aria-label="\u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043E\u0442"
                                  className="YrDvFUmSWM"
                                  htmlFor="4913622from"
                                  data-reactid={303}
                                >
                                  от
                                </label>
                                <button
                                  aria-label="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u043E\u0442"
                                  className="_3DiWbCQOB8"
                                  disabled
                                  data-reactid={304}
                                />
                              </p>
                            </li>
                            <li className="_1W_iTekL7P" data-reactid={305}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="to"
                                data-214865aa="true"
                                data-reactid={306}
                              >
                                <input
                                  type="text"
                                  className="_2yK7W3SWQ- _1f2usTwyAs"
                                  id="4913622to"
                                  name="\u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u0434\u043E"
                                  placeholder={240}
                                  defaultValue
                                  data-reactid={307}
                                />
                                <label
                                  aria-label="\u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u0434\u043E"
                                  className="YrDvFUmSWM"
                                  htmlFor="4913622to"
                                  data-reactid={308}
                                >
                                  до
                                </label>
                                <button
                                  aria-label="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u041C\u0430\u043A\u0441. \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432 \u0434\u043E"
                                  className="_3DiWbCQOB8"
                                  disabled
                                  data-reactid={309}
                                />
                              </p>
                            </li>
                          </ul>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={310} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={312}>
                      <fieldset
                        data-autotest-id={4913592}
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={313}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={314}>
                          Соотношение сторон
                        </legend>
                        <ul className="_2y67xS5HuR" data-da31bdc5="true" data-reactid={315}>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={316}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={317}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103953"
                                data-9d4e0d85="true"
                                data-reactid={318}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 16:9"
                                  id="4913592_12103953"
                                  data-reactid={319}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={320}>
                                  <span className="NVoaOvqe58" data-reactid={321}>
                                    16:9
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={322}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={323}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103952"
                                data-9d4e0d85="true"
                                data-reactid={324}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 16:10"
                                  id="4913592_12103952"
                                  data-reactid={325}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={326}>
                                  <span className="NVoaOvqe58" data-reactid={327}>
                                    16:10
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={328}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={329}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103956"
                                data-9d4e0d85="true"
                                data-reactid={330}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 5:4"
                                  id="4913592_12103956"
                                  data-reactid={331}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={332}>
                                  <span className="NVoaOvqe58" data-reactid={333}>
                                    5:4
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={334}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={335}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103955"
                                data-9d4e0d85="true"
                                data-reactid={336}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 4:3"
                                  id="4913592_12103955"
                                  data-reactid={337}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={338}>
                                  <span className="NVoaOvqe58" data-reactid={339}>
                                    4:3
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={340}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={341}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="4913592_12103954"
                                data-9d4e0d85="true"
                                data-reactid={342}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D 21:9"
                                  id="4913592_12103954"
                                  data-reactid={343}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={344}>
                                  <span className="NVoaOvqe58" data-reactid={345}>
                                    21:9
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer className="_2XviVqx9xN" data-da31bdc5="true" data-reactid={346}>
                          <a href="/" className="_2Wg9rE1HzR" data-reactid={347}>
                            Показать ещё 2
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={348} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={350}>
                      <fieldset
                        data-autotest-id={4913629}
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={351}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={352}>
                          Вход HDMI
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={353}>
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor={4913629}
                            data-9d4e0d85="true"
                            data-reactid={354}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0412\u0445\u043E\u0434 HDMI"
                              id={4913629}
                              data-reactid={355}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={356}>
                              <span className="NVoaOvqe58 _1gAodJU0Dw" data-reactid={357}>
                                Вход HDMI
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={358} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={360}>
                      <fieldset
                        data-autotest-id={4913597}
                        className="_2ESDYRtKSQ"
                        data-7473e865="true"
                        data-reactid={361}
                      >
                        <legend className="_6Ev7l7PxvV" data-reactid={362}>
                          Время отклика, мс
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={363}>
                          <ul className="_1DYevRkiWL" data-reactid={364}>
                            <li className="_1W_iTekL7P" data-reactid={365}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="from"
                                data-214865aa="true"
                                data-reactid={366}
                              >
                                <input
                                  type="text"
                                  className="_2yK7W3SWQ- _1d02bPcWht"
                                  id="4913597from"
                                  name="\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u043E\u0442"
                                  placeholder={1}
                                  defaultValue
                                  data-reactid={367}
                                />
                                <label
                                  aria-label="\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u043E\u0442"
                                  className="YrDvFUmSWM"
                                  htmlFor="4913597from"
                                  data-reactid={368}
                                >
                                  от
                                </label>
                                <button
                                  aria-label="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u043E\u0442"
                                  className="_3DiWbCQOB8"
                                  disabled
                                  data-reactid={369}
                                />
                              </p>
                            </li>
                            <li className="_1W_iTekL7P" data-reactid={370}>
                              <p
                                className="_1idia0vVNM"
                                data-range-input-type="to"
                                data-214865aa="true"
                                data-reactid={371}
                              >
                                <input
                                  type="text"
                                  className="_2yK7W3SWQ- _1f2usTwyAs"
                                  id="4913597to"
                                  name="\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u0434\u043E"
                                  placeholder={60}
                                  defaultValue
                                  data-reactid={372}
                                />
                                <label
                                  aria-label="\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u0434\u043E"
                                  className="YrDvFUmSWM"
                                  htmlFor="4913597to"
                                  data-reactid={373}
                                >
                                  до
                                </label>
                                <button
                                  aria-label="\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0412\u0440\u0435\u043C\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0430 \u0434\u043E"
                                  className="_3DiWbCQOB8"
                                  disabled
                                  data-reactid={374}
                                />
                              </p>
                            </li>
                          </ul>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={375} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={377}>
                      <fieldset
                        data-autotest-id={14211207}
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={378}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={379}>
                          Игровой монитор
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={380}>
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor={14211207}
                            data-9d4e0d85="true"
                            data-reactid={381}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0418\u0433\u0440\u043E\u0432\u043E\u0439 \u043C\u043E\u043D\u0438\u0442\u043E\u0440"
                              id={14211207}
                              data-reactid={382}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={383}>
                              <span className="NVoaOvqe58 _1gAodJU0Dw" data-reactid={384}>
                                Игровой монитор
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={385} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={387}>
                      <fieldset
                        data-autotest-id="manufacturer_warranty"
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={388}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={389}>
                          Гарантия производителя
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={390}>
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor="manufacturer_warranty"
                            data-9d4e0d85="true"
                            data-reactid={391}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F"
                              id="manufacturer_warranty"
                              data-reactid={392}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={393}>
                              <span className="NVoaOvqe58 _1gAodJU0Dw" data-reactid={394}>
                                Гарантия производителя
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={395} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={397}>
                      <fieldset className="_2uSu7TQsMO" data-b8226845="true" data-reactid={398}>
                        <legend className="_2Ff0sb526M" data-reactid={399}>
                          Рейтинг магазина
                        </legend>
                        <ul className="_3HH8SRnp4A" data-reactid={400}>
                          <li className="_2gBbJONjvk" data-b8226845="true" data-reactid={401}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={402}>
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="qrfrom_3"
                                data-5b15bb05="true"
                                data-reactid={403}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"
                                  id="qrfrom_3"
                                  data-reactid={404}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={405}>
                                  <div className="_1FbxpCIr0K XNE5y9RjQT" data-reactid={406}>
                                    <div className="_27kJ3ORjYr" data-reactid={407} />
                                    <div className="_308ugYmRJI" data-reactid={408} />
                                  </div>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_2gBbJONjvk" data-b8226845="true" data-reactid={409}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={410}>
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="qrfrom_4"
                                data-5b15bb05="true"
                                data-reactid={411}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"
                                  id="qrfrom_4"
                                  data-reactid={412}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={413}>
                                  <div className="_1FbxpCIr0K _3RxxCpjiKz" data-reactid={414}>
                                    <div className="_27kJ3ORjYr" data-reactid={415} />
                                    <div className="_308ugYmRJI" data-reactid={416} />
                                  </div>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_2gBbJONjvk" data-b8226845="true" data-reactid={417}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={418}>
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="qrfrom_-1"
                                data-5b15bb05="true"
                                data-reactid={419}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"
                                  id="qrfrom_-1"
                                  data-reactid={420}
                                  defaultValue="on"
                                  defaultChecked
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={421}>
                                  <div className="_1FbxpCIr0K _3A2H6kwJcC" data-reactid={422}>
                                    <div className="_27kJ3ORjYr" data-reactid={423} />
                                    <div className="_308ugYmRJI" data-reactid={424} />
                                  </div>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={425} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={427}>
                      <fieldset
                        data-autotest-id="free-delivery"
                        className="n6SnxORUP9"
                        data-6df2085="true"
                        data-reactid={428}
                      >
                        <legend className="_3lIkhO0snX" data-reactid={429}>
                          Бесплатная доставка курьером
                        </legend>
                        <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={430}>
                          <label
                            className="_1e7iX1B2oW"
                            htmlFor="free-delivery"
                            data-9d4e0d85="true"
                            data-reactid={431}
                          >
                            <input
                              type="checkbox"
                              className="_3Uz6PcbAtW"
                              tabIndex={0}
                              name="\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                              id="free-delivery"
                              data-reactid={432}
                              defaultValue="on"
                            />
                            <div className="LhMupC0dLR" data-reactid={433}>
                              <span className="NVoaOvqe58 _1gAodJU0Dw" data-reactid={434}>
                                Бесплатная доставка курьером
                              </span>
                            </div>
                          </label>
                        </div>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={435} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={461}>
                      <fieldset
                        data-autotest-id="home_region"
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={462}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={463}>
                          Страна продавца
                        </legend>
                        <ul className="_2y67xS5HuR" data-da31bdc5="true" data-reactid={464}>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={465}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={466}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="home_region_149"
                                data-9d4e0d85="true"
                                data-reactid={467}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"
                                  id="home_region_149"
                                  data-reactid={468}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={469}>
                                  <span className="NVoaOvqe58" data-reactid={470}>
                                    Беларусь
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={471}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={472}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="home_region_225"
                                data-9d4e0d85="true"
                                data-reactid={473}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430 \u0420\u043E\u0441\u0441\u0438\u044F"
                                  id="home_region_225"
                                  data-reactid={474}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={475}>
                                  <span className="NVoaOvqe58" data-reactid={476}>
                                    Россия
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={477} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={479}>
                      <fieldset className="_3F0KYdeicF" data-d5801345="true" data-reactid={480}>
                        <legend className="_2505xdN31K" data-reactid={481}>
                          Срок доставки курьером
                        </legend>
                        <ul className="_1Oc123Sp0Q" data-reactid={482}>
                          <li className="_2TCO5ZPQgp" data-d5801345="true" data-reactid={483}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={484}>
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="delivery-interval_0"
                                data-5b15bb05="true"
                                data-reactid={485}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u0440\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                                  id="delivery-interval_0"
                                  data-reactid={486}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={487}>
                                  <span className="rCLpHJFFlJ" data-reactid={488}>
                                    Сегодня
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_2TCO5ZPQgp" data-d5801345="true" data-reactid={489}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={490}>
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="delivery-interval_1"
                                data-5b15bb05="true"
                                data-reactid={491}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u0440\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                                  id="delivery-interval_1"
                                  data-reactid={492}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={493}>
                                  <span className="rCLpHJFFlJ" data-reactid={494}>
                                    Завтра
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_2TCO5ZPQgp" data-d5801345="true" data-reactid={495}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={496}>
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="delivery-interval_5"
                                data-5b15bb05="true"
                                data-reactid={497}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u0440\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                                  id="delivery-interval_5"
                                  data-reactid={498}
                                  defaultValue="on"
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={499}>
                                  <span className="rCLpHJFFlJ" data-reactid={500}>
                                    До 5 дней
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_2TCO5ZPQgp" data-d5801345="true" data-reactid={501}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={502}>
                              <label
                                className="_2qeJ9otxLk"
                                htmlFor="delivery-interval_-1"
                                data-5b15bb05="true"
                                data-reactid={503}
                              >
                                <input
                                  type="radio"
                                  className="_375lDzZBQV"
                                  tabIndex={0}
                                  name="\u0421\u0440\u043E\u043A \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C"
                                  id="delivery-interval_-1"
                                  data-reactid={504}
                                  defaultValue="on"
                                  defaultChecked
                                />
                                <div className="_2zRi9ex2Rl" data-reactid={505}>
                                  <span className="rCLpHJFFlJ" data-reactid={506}>
                                    Любой
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={507} />
                    </div>
                    <div className="_2Hue1bCg-N" data-f3c53385="true" data-reactid={509}>
                      <fieldset
                        data-autotest-id="fesh"
                        className="_3M70uokkTS"
                        data-da31bdc5="true"
                        data-reactid={510}
                      >
                        <legend className="ShXb4FpS5R" data-reactid={511}>
                          Магазины
                        </legend>
                        <ul className="_2y67xS5HuR" data-da31bdc5="true" data-reactid={512}>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={513}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={514}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_38535"
                                data-9d4e0d85="true"
                                data-reactid={515}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B 21vek.by"
                                  id="fesh_38535"
                                  data-reactid={516}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={517}>
                                  <span className="NVoaOvqe58" data-reactid={518}>
                                    21vek.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={519}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={520}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_56478"
                                data-9d4e0d85="true"
                                data-reactid={521}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B AMD.by"
                                  id="fesh_56478"
                                  data-reactid={522}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={523}>
                                  <span className="NVoaOvqe58" data-reactid={524}>
                                    AMD.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={525}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={526}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_380337"
                                data-9d4e0d85="true"
                                data-reactid={527}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B DEEL.BY"
                                  id="fesh_380337"
                                  data-reactid={528}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={529}>
                                  <span className="NVoaOvqe58" data-reactid={530}>
                                    DEEL.BY
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={531}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={532}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_255884"
                                data-9d4e0d85="true"
                                data-reactid={533}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B imarket.by"
                                  id="fesh_255884"
                                  data-reactid={534}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={535}>
                                  <span className="NVoaOvqe58" data-reactid={536}>
                                    imarket.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={537}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={538}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_47281"
                                data-9d4e0d85="true"
                                data-reactid={539}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B MMG.by"
                                  id="fesh_47281"
                                  data-reactid={540}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={541}>
                                  <span className="NVoaOvqe58" data-reactid={542}>
                                    MMG.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={543}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={544}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_221610"
                                data-9d4e0d85="true"
                                data-reactid={545}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B NOVATEK"
                                  id="fesh_221610"
                                  data-reactid={546}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={547}>
                                  <span className="NVoaOvqe58" data-reactid={548}>
                                    NOVATEK
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={549}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={550}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_45816"
                                data-9d4e0d85="true"
                                data-reactid={551}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B RAM.BY"
                                  id="fesh_45816"
                                  data-reactid={552}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={553}>
                                  <span className="NVoaOvqe58" data-reactid={554}>
                                    RAM.BY
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={555}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={556}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_181298"
                                data-9d4e0d85="true"
                                data-reactid={557}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B SOCKET.BY"
                                  id="fesh_181298"
                                  data-reactid={558}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={559}>
                                  <span className="NVoaOvqe58" data-reactid={560}>
                                    SOCKET.BY
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={561}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={562}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_46865"
                                data-9d4e0d85="true"
                                data-reactid={563}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B TTN.by"
                                  id="fesh_46865"
                                  data-reactid={564}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={565}>
                                  <span className="NVoaOvqe58" data-reactid={566}>
                                    TTN.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={567}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={568}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_38395"
                                data-9d4e0d85="true"
                                data-reactid={569}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B ULTRA.by"
                                  id="fesh_38395"
                                  data-reactid={570}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={571}>
                                  <span className="NVoaOvqe58" data-reactid={572}>
                                    ULTRA.by
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={573}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={574}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_476488"
                                data-9d4e0d85="true"
                                data-reactid={575}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B win7"
                                  id="fesh_476488"
                                  data-reactid={576}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={577}>
                                  <span className="NVoaOvqe58" data-reactid={578}>
                                    win7
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="_1-l0XiE_ze" data-da31bdc5="true" data-reactid={579}>
                            <div className="_16hsbhrgAf" data-17df2f2a="true" data-reactid={580}>
                              <label
                                className="_1e7iX1B2oW"
                                htmlFor="fesh_223151"
                                data-9d4e0d85="true"
                                data-reactid={581}
                              >
                                <input
                                  type="checkbox"
                                  className="_3Uz6PcbAtW"
                                  tabIndex={0}
                                  name="\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u041C\u0443\u043B\u044C\u0442\u0438\u043A\u043E\u043C"
                                  id="fesh_223151"
                                  data-reactid={582}
                                  defaultValue="on"
                                />
                                <div className="LhMupC0dLR" data-reactid={583}>
                                  <span className="NVoaOvqe58" data-reactid={584}>
                                    Мультиком
                                  </span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <footer className="_2XviVqx9xN" data-da31bdc5="true" data-reactid={585}>
                          <a href="/" className="_2Wg9rE1HzR" data-reactid={586}>
                            Показать всё
                          </a>
                        </footer>
                      </fieldset>
                      <div className="_3vgfOcGSnv" data-reactid={587} />
                    </div>
                  </div>
                  <div className="_3U2TeVBOWN" data-reactid={590}>
                    <div className="_2Wdscr8iIC" data-57ec50ea="true" data-reactid={591}>
                      <Button>Все фильтры</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchLayout
