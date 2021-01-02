/*
 * Polkascan Explorer GUI
 *
 * Copyright 2018-2020 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * network.class.ts
 */

import { Resource } from 'ngx-jsonapi';

export class Network extends Resource {

    public attributes = {
        name: 'name',
        network_id: 'network_id',
        network_type: 'network_type',
        chain_type: 'chain_type',
        api_url_root: 'api_url_root',
        sdk_api_url_root: 'sdk_api_url_root',
        color_code: 'color_code',
        token_decimals: 0,
        token_symbol: 'token_symbol'
    };
}
