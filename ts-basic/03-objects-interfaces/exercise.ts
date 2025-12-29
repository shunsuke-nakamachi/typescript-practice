/**
 * Chapter 03: Objects & Interfaces
 */

interface Product {
    name: string;
    price: number;
    description?: string;
}

const laptop: Product = {
    name: "MacBook Pro",
    price: 250000
};

console.log(`${laptop.name}: ¥${laptop.price}`);

/**
 * 演習 3-1: Bookインターフェースを作成してください
 *
 * - title (string)
 * - author (string)
 * - pages (number)
 * - isRead (boolean, 任意項目)
 */

// TODO: ここにインターフェースを定義

// TODO: 作成したインターフェースを使って変数 myBook を定義
